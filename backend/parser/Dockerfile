FROM python:3.9


RUN apt-get update 
# RUN apt-get install -y gconf-service libasound2 libatk1.0-0 libcairo2 libcups2 libfontconfig1 libgdk-pixbuf2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libxss1 fonts-liberation  libnss3 lsb-release xdg-utils

#download and install chrome
# RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
# RUN dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install

# RUN apt update -y && apt install libgl1-mesa-glx sudo chromium chromium-driver -y

COPY requirements.txt ./
RUN pip install -r requirements.txt

RUN useradd -ms /bin/bash andrey

COPY . .
RUN jupyter nbconvert parser.ipynb --to python

USER andrey

CMD ["python", "parser.py", "-n", "1"]
# CMD ["google-chrome", "--no-sandbox"]