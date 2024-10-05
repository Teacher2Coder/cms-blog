# CMS Blog Webpage
This application is a CMS style blog posting website that allows users to create an account, post blog posts, update and delete them as well as view other people's blog posts and leave comments on them.
 
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
 
## Installation
To install the rerquired dependencies for this repository, run ```npm install```.
Create a .env file  that is structured like this:
```
DB_NAME='blog_db'
DB_USER='postgres'
DB_PASSWORD='teacher2coder'
```

Replace the Username and password with your postgres username and password.

To create the database, open your postgres shell and run the command ```\i db/schema.sql;```.
 
## Usage

Upon opening the webpage, the user will be greated by several blog posts by different authors, but they will not be able to see what these blog posts have to say until they create their own account or log in to an already created account. To do so, they will need to click the "Login" button at the top.

On the login page, the user will have the option to create a new account or sign in to an account that they already created. Once they have done so, they will be redirected to the home page.

Users may now click on someone's blog post and read what they had to say. If the user wishes, they can leave a comment as well.

If the user wishes to create their own blog post, on the home page, the user must click the "Create a new Post" button where they will be prompted to write their own blog post in a modal. Once the user clicks "Post!", the post will be added to the database.

The user may also edit their post when they click on their post from the home page and they click on the "Edit Post" button. The user will be asked to make their edits and then submit them. The page will then be reloaded with the changes added. Also if the user wishes, they can delete the post as well. Before the post is deleted, a modal will ask the user to confirm their decision. Once the user confirms, the post will be deleted.
 
## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2024 Ethan Robert Owens

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 
## Contributing
If you want to contribute, fork the repository in GitHub and send me any code suggestions. Feel free to reach out via GitHub or email (Both are below).

 
## Tests
N/A
 
## Questions
* GitHub: [@Teacher2Coder](https://www.github.com/Teacher2Coder)
* Email: ethan.owens4@gmail.com