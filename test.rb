# def delete_every_seventh_byte(file)
#   bin = File.open(file, 'r+')
#   i = 1
#   bin.each_byte do |byte|
#     if i % 7 == 0
#       IO.binwrite("data.bin", "\0", i-1)
#     end
#     i += 1
#   end
# end
#
# delete_every_seventh_byte("data.bin")
#
#
# IO.binwrite("data.bin", '', 6)

def matches(str)
  if str.match(/Odoo/) && str.match(/#rules/)
    puts "yay!"
  end
end

str = "Odoo and #rule"

matches(str)

Test 10: SQL (if you know SQL)
Write pseudo-SQL statements to create database tables to store the products of a basic webshop.
- Each product has a name, a price, a creation date and may belong to several categories. Categories have a name and a flag to indicate whether the category is private or public.
- Imagine that these tables are populated with 10000 products and 300 categories, with products being assigned a random set of public and private categories. Write a SQL query to find the list of products that belong to more than 5 public categories.
- How would you populate the tables with test data (thousands of products with random values and categories)

CREATE TABLE Products (
  ProductId int,
  Name varchar(255),
  Price int,
  Creation_date date

)

CREATE TABLE Categories(
  CategoryID int,
  Name varchar(255),
  Flag varchar(255)
)

CREATE TABLE ProductsAndCategories(
  ProductId int,
  CategoryID int
)
