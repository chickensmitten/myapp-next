import BaseApi from "../BaseApi";

class PostApi extends BaseApi {

  constructor() {
    super('/posts');
  }

}

export default PostApi;