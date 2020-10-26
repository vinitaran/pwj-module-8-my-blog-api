const PATH = "./data.json";
const fs = require("fs");

class Post {
  get() {
    /** Get posts */
    return this.readData();
  }

  getIndividualBlog(post_id) {
    /**Get one blog posts */
    const allPosts = this.readData();
    const foundPost = allPosts.find((post) => post.id == post_id);
    return foundPost;
  }

  add(newPost) {
    /** Add new blog posts */
    const currentPosts = this.readData();
    currentPosts.unshift(newPost);
    this.storeData(currentPosts);
  }

  readData() {
    let rawdata = fs.readFileSync(PATH);
    let posts = JSON.parse(rawdata);
    return posts;
  }

  storeData(rawData) {
    let data = JSON.stringify(rawData);
    fs.writeFileSync(PATH, data);
  }
}

module.exports = Post;
