# -*- coding: utf-8 -*-
import requests
from bs4 import BeautifulSoup
from csv import writer

response = requests.get('https://www.webfx.com/blog/web-design/code-demo-sites/')
soup = BeautifulSoup(response.text, 'html.parser')

posts = soup.find_all('p')

for post in posts:
    print(post.get_text())