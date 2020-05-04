'''
Take data out of the master recipe file
'''
file_name = "Data/Final/filtered_final.txt"
file = open(file_name, "r")
data = file.readlines()

strip_data = []
master_data_dic = {}
for i in data:
    strip_data.append(i.strip())
for i in range (len(strip_data)):
    temp = strip_data[i]
    temp = temp.split(" ")
    master_data_dic[temp[0]] = int(temp[1])
del strip_data
file.close()


'''
Take data from cooking_verbs
'''
file_name = "cooking_verbs.txt"
file = open(file_name, "r")
data = file.readlines()

verb_list = []
for i in data:
    verb_list.append(i.strip())
file.close()

'''
Take data from cooking_nouns
'''
file_name = "cooking_nouns.txt"
file = open(file_name, "r")
data = file.readlines()

noun_list = []
for i in data:
    noun_list.append(i.strip())
file.close()

# Test sentence
test_paragraph1 = "toast split bread under broiler. Remove bread when it is toasted golden brown in color. Brush bread liberally with garlic oil. Sprinkle with cheese, if using, and parsley. If you added cheese, return to broiler and brown 30 seconds. Cut into chunks and serve."
test_paragraph = "the punishment assigned to a defendant found guilty by a court, or fixed by law for a particular offense."

# Remove unwanted punctuation / convert to list
remove = "`~!@#$%^&*()-_=+[]{};:,<.>/?\|"
for char in remove:
    test_paragraph = test_paragraph.replace(char,"")
test_paragraph = test_paragraph.lower()
paragraph_list = list(test_paragraph.split(" ")) 

for word in paragraph_list:
    if (word in master_data_dic):
        score = master_data_dic[word]
    else:
        score = ""
    print(word , " " , score)

# Generate an average score for the paragraph
total_words = len(paragraph_list)
current_score = 0
for word in paragraph_list:
    word_score = 0
    if (word in master_data_dic):
        word_score = int(master_data_dic[word])
    else:
        word_score = 1
    if (word in verb_list):
        word_score = word_score * 2
    if (word in noun_list):
        word_score = word_score * 1.5
    current_score += word_score
  
score = current_score / total_words
print(score)        
    




















    