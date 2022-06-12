package queries

import (
	"github.com/Dwhistle/2022-CityHack/backend/src/models"
	"github.com/Dwhistle/2022-CityHack/backend/src/models/ext"
	"github.com/jmoiron/sqlx"
)

type ProductQueries struct {
	*sqlx.DB
}

func (q *ProductQueries) InsertBatch(creatorId int32, prodExt []*ext.Product) error {

	var products = make([]models.ProductRecord, len(prodExt))

	for i, p := range prodExt {
		products[i] = models.ProductRecord{
			Status:    "NEW",
			CreatorId: creatorId,
			Okpd2:     p.Okpd2,
			Data: models.ProductData{
				Name:        p.Name,
				Description: p.Description,
				Img:         p.Img,
				Category:    p.Category,
			},
		}
	}

	_, err := q.NamedExec(UpsertProductQuery, products)
	return err
}

func (q *ProductQueries) GetUserProducts(creatorId int32) ([]models.ProductRecord, error) {
	products := []models.ProductRecord{}
	err := q.Select(&products, GetUserProductsQuery, creatorId)
	return products, err
}

func (q *ProductQueries) GetOkpd2() ([]models.Okpd2, error) {
	records := []models.Okpd2{}
	err := q.Select(&records, GetOdkp2Query)
	return records, err
}
