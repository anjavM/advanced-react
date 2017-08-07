class dataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }
  mapIntoObject(arr) {
    //accumulator, current element
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {}); //the starting point is an empty object
  }

  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }

  getAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }
}

export default dataApi;
