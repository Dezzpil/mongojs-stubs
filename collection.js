var collection = {
    /**
     * Returns the count of documents that would match a find() query for the collection or view.
     * The db.collection.count() method does not perform the find() operation but instead counts and returns the number of results that match a query.
     * count() is equivalent to the db.collection.find(query).count() construct.
     * @see cursor.count()
     *
     * The options document contains the following fields:
     *  limit {integer} Optional. The maximum number of documents to count.
     *  skip {integer} Optional. The number of documents to skip before counting.
     *  hint {string|{}} Optional. An index name hint or specification for the query.
     *  maxTimeMS {integer}	Optional. The maximum amount of time to allow the query to run.
     *  readConcern	{string} Optional. Specifies the read concern. The default level is "local".
     *
     * @param {{}} query The query selection criteria.
     * @param {{}} options Optional. Extra options for modifying the count.
     * @returns {number}
     */
    count: function(query, options) { return 0; },

    /**
     * Selects documents in a collection or view and returns a cursor to the selected documents.
     * @link https://docs.mongodb.com/manual/reference/method/db.collection.find/
     * @param {{}} query Optional. Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}).
     * @param {{}} projection Optional. Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter. For details, see Projection.
     * @returns {Cursor}
     */
    find: function(query, projection) { return new Cursor(); }
};

function Collection() {
    return collection;
}