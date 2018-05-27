var db = {

    /**
     * Provides a helper to run specified database commands against the admin database.
     *
     * The method returns a response document that contains the following fields.
     * ok - A number that indicates whether the command has succeeded (1) or failed (0).
     * operationTime - The logical time of the performed operation, represented in MongoDB by the timestamp from the oplog entry. Only for replica sets and sharded clusters
     * $clusterTime - A document that returns the signed cluster time. Cluster time is a logical time used for ordering of operations. Only for replica sets and sharded clusters. For internal use only.
     *
     * @link https://docs.mongodb.com/manual/reference/method/db.adminCommand/#db.adminCommand
     * @param {string} command A database command, specified either in document form or as a string. If specified as a string, the command cannot include any arguments.
     * @returns {{ok: boolean, operationTime: string, $clusterTime: string}}
     */
    adminCommand: function(command) {},

    /**
     * Runs a specified admin/diagnostic pipeline which does not require an underlying collection. For aggregations on collection data, see db.collection.aggregate().
     *
     * The options document can contain the following fields and values:
     *  explain	{boolean} Optional. Specifies to return the information on the processing of the pipeline. See Return Information on Aggregation Pipeline Operation for an example.
     *  allowDiskUse {boolean} Optional. Enables writing to temporary files. When set to true, aggregation operations can write data to the _tmp subdirectory in the dbPath directory. See Perform Large Sort Operation with External Sort for an example.
     *  cursor {{}} Optional. Specifies the initial batch size for the cursor. The value of the cursor field is a document with the field batchSize. See Specify an Initial Batch Size for syntax and example.
     *  maxTimeMS {integer} Optional. Specifies a time limit in milliseconds for processing operations on a cursor. If you do not specify a value for maxTimeMS, operations will not time out. A value of 0 explicitly specifies the default unbounded behavior. MongoDB terminates operations that exceed their allotted time limit using the same mechanism as db.killOp(). MongoDB only terminates an operation at one of its designated interrupt points.
     *  bypassDocumentValidation {boolean} Optional. Available only if you specify the $out aggregation operator. Enables db.collection.aggregate to bypass document validation during the operation. This lets you insert documents that do not meet the validation requirements.
     *  readConcern	{{}} Optional. Specifies the read concern.
     *  collation {{}} Optional. Specifies the collation to use for the operation. Collation allows users to specify language-specific rules for string comparison, such as rules for lettercase and accent marks.
     *  hint {string|{}} Optional. The index to use for the aggregation. The index is on the initial collection/view against which the aggregation is run.
     *  comment	{string} Optional. Users can specify an arbitrary string to help trace the operation through the database profiler, currentOp, and logs.
     *
     * @param {[]} pipeline The pipeline parameter is an array of stages to execute. It must start with a compatible stage that does not require an underlying collection, such as $currentOp or $listLocalSessions.
     * @param {{}} options
     *
     */
    aggregate: function(pipeline, options) {},

    /**
     * Copies data directly between MongoDB instances.
     * @param {string} from The address of the server to clone from.
     * @param {string} collection The collection in the MongoDB instance that you want to copy. db.cloneCollection() will only copy the collection with this name from database of the same name as the current database the remote MongoDB instance. If you want to copy a collection from a different database name you must use the cloneCollection directly.
     * @param {{}} query Optional. A standard query document that limits the documents copied as part of the db.cloneCollection() operation. All query selectors available to the find() are available here.
     */
    cloneCollection: function(from, collection, query) {},

    cloneDatabase: function() {},

    commandHelp: function() {},

    copyDatabase: function() {},

    createCollection: function() {},

    createView: function() {},

    currentOp: function() {},

    dropDatabase: function() {},

    eval: function() {},

    fsyncLock: function() {},

    fsyncUnlock: function() {},

    /**
     * Returns a collection or a view object that is functionally equivalent to using the db.<collectionName> syntax.
     * The method is useful for a collection or a view whose name might interact with the mongo shell itself, such as names that begin with _ or that match a database shell method.
     * @param {string} name
     * @returns {Collection}
     */
    getCollection: function(name) { return new Collection(); },

    getCollectionInfos: function() {},

    getCollectionNames: function() {},

    getLastError: function() {},

    getLastErrorObj: function() {},

    getLogComponents: function() {},

    getMongo: function() {},

    getName: function() {},

    getPrevError: function() {},

    getProfilingLevel: function() {},

    getProfilingStatus: function() {},

    getReplicationInfo: function() {},

    /**
     * Used to return another database without modifying the db variable in the shell environment.
     * You can use db.getSiblingDB() as an alternative to the use <database> helper. This is particularly useful when writing scripts using the mongo shell where the use helper is not available
     * @param {string} database
     */
    getSiblingDB: function(database) {},

    help: function() {},

    hostInfo: function() {},

    isMaster: function() {},

    killOp: function() {},

    listCommands: function() {},

    logout: function() {},

    printCollectionStats: function() {},

    printReplicationInfo: function() {},

    printShardingStatus: function() {},

    printSlaveReplicationInfo: function() {},

    repairDatabase: function() {},

    resetError: function() {},

    runCommand: function() {},

    serverBuildInfo: function() {},

    serverCmdLineOpts: function() {},

    serverStatus: function() {},

    setLogLevel: function() {},

    setProfilingLevel: function() {},

    shutdownServer: function() {},

    stats: function() {},

    version: function() {}

};

/**
 *
 * @returns {{}}
 * @constructor
 */
function DB() {
    return db;
}