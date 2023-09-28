import express from 'express';
import elasticsearch from 'elasticsearch'

const router = express.Router();

var indexname = "chapter_bid_products"

var client = new elasticsearch.Client({
    host: 'http://16.171.236.184:9200',
    log: 'trace'
});



var payload = {
    "index": indexname,
    "body": {
        "settings": {
            "analysis": {
                "analyzer": {
                    "indexing_analyzer": {
                        "tokenizer": "whitespace",
                        "filter": ["lowercase", "edge_ngram_filter"]
                    },
                    "search_analyze": {
                        "tokenizer": "whitespace",
                        "filter": "lowercase"
                    }
                },
                "filter": {
                    "edge_ngram_filter": {
                        "type": "edge_ngram",
                        "min_gram": 1,
                        "max_gram": 20
                    }
                }
            }
        },
        "mappings": {
            "world": {
                "properties": {
                    "city": {
                        "type": "string",
                        "analyzer": "indexing_analyzer",
                        "search_analyzer": "search_analyze"
                    },
                    "state": {
                        "type": "string",
                        "analyzer": "indexing_analyzer",
                        "search_analyzer": "search_analyze"
                    },
                    "country": {
                        "type": "string",
                        "analyzer": "indexing_analyzer",
                        "search_analyzer": "search_analyze"
                    }
                }
            }
        }
    }



}


// Define a route for creating the Elasticsearch index and populating it with JSON data.
router.get("/create", function (request, response) {
    // Define your JSON data here. You can replace this with your actual JSON data.
    var jsonData = [

        /// you data
    ]


    // Index the JSON data into Elasticsearch.
    client.bulk({
        body: jsonData.reduce(function (bulkData, item) {
            bulkData.push({ index: { _index: indexname } });
            bulkData.push(item);
            return bulkData;
        }, [])
    }, function (error, esResponse) {
        if (error) {
            console.error("Error indexing JSON data into Elasticsearch:", error);
            response.status(500).json({ error: "Internal server error" });
        } else {
            console.log(jsonData.length);
            console.log("JSON data indexed successfully.");
            response.json({ message: "JSON data indexed successfully." });
        }
    });
});


router.get("/search", function (req, resp) {
    console.log(req.query.search);
    console.log("types")
    client.search({
        index: indexname,
        body: {
            query: {
                bool: {
                    should: [
                        {
                            wildcard: {
                                firstName: {
                                    value: `${req.query.search}*`,
                                },
                            },
                        },
                        {
                            wildcard: {
                                lastName: {
                                    value: `${req.query.search}*`,
                                },
                            },
                        },
                    ],
                },
            },
        },
    }, function (error, response) {
        console.log(response)
        resp.json({ result: response });
    });
});








module.exports = router;