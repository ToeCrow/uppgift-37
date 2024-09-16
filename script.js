// Get references to form and article section
const form = document.getElementById('article-form');
const articleSection = document.querySelector('.section-articles');

// Function to count words in a string
function countWords(str) {
    return str.trim().split(/\s+/).length;
}

// Function to determine the class based on word count
function getClassBasedOnWordCount(wordCount) {
    if (wordCount <= 75) {
        return 'art-small';
    // } else if (wordCount <= 100) {
    //     return 'art-medium';
    } else {
        return 'art-large';
    }
}

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way
    
    // Get the title and content from the form
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    // Count the number of words in the content
    const wordCount = countWords(content);
    
    // Determine the class based on word count
    const articleClass = getClassBasedOnWordCount(wordCount);
    
    // Create a new article element
    const newArticle = document.createElement('article');
    newArticle.classList.add(articleClass);
    
    // Add the title and content to the article
    const articleTitle = document.createElement('h3');
    articleTitle.textContent = title;
    newArticle.appendChild(articleTitle);
    
    const articleContent = document.createElement('p');
    articleContent.textContent = content;
    newArticle.appendChild(articleContent);
    
    // Append the new article to the section
    articleSection.appendChild(newArticle);
    
    // Optionally clear the form fields
    form.reset();
});
