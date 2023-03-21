import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0"

const supabaseUrl = 'https://ndmepqcoazrhdeaiimjh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbWVwcWNvYXpyaGRlYWlpbWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1NTU0OTksImV4cCI6MTk5MzEzMTQ5OX0.uULbqkCaqecExdYEY_b_jCgMxvyyJrGQQ5mGFzcFVOk'
const supabase = createClient(supabaseUrl, supabaseKey)


async function getBooks() {
  let { data: books, error } = await supabase
  .from('books')
  .select('*')

  for (let book of books) {
    let bookList = document.getElementById('books'); bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.description}</td></tr>`;
  }
  
}

getBooks();
