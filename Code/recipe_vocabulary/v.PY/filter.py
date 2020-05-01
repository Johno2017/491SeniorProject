import enchant

file_name = "Data/vocab_list_py.txt"
file = open(file_name, "r")
data = file.readlines()


'''
This block of code takes an existing data file and converting
everything to a dictionary
'''
strip_data = []
data_alone = []
for i in data:
    strip_data.append(i.strip())
for i in range (len(strip_data)):
    temp = strip_data[i]
    temp = temp.split(" ")
    data_alone.append(temp[0])
del strip_data
file.close()


cooking_verbs = []
not_words = []

d = enchant.Dict("en_US")
for words in data_alone:
    if (d.check(words) == False):
        not_words.append(words)

print(not_words)
