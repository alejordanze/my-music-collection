var request = require("request");

const API_URL = "http://localhost:3000/api/albums";

const albumToCreate = {
    "releaseDate": "1974-10-10",
    "rating": 85.0,
    "title": "Bohemian Rhapsody",
    "year": 1973
}
const create = {
    id: 0
};

describe("Albums API Exists", function() {

    it("should create an album", function(done) {
        request({method: "POST", 
                uri: API_URL,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(albumToCreate)}, function(error, response, body) {
                create.id = JSON.parse(body).data.id;
            expect(response.statusCode).toBe(201);
            done();
        });
    });

    it("should return status code 200 getting albums", function(done) {
        request.get(API_URL, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("should return album list length grater than zero", function(done) {
        request.get(API_URL, function(error, response, body) {
            const data = JSON.parse(body).data;
            expect(data.length).toBeGreaterThan(0);
            done();
        });
    });

    it("should update an album", function(done) {
        changeAlbum();
        request({method: "PUT", 
                uri: `${API_URL}/${create.id}`,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(albumToCreate)}, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("should return 404 status code updating with wrong id", function(done) {
        changeAlbum();
        request({method: "PUT", 
                uri: `${API_URL}/-1`,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(albumToCreate)}, function(error, response, body) {
            expect(response.statusCode).toBe(404);
            done();
        });
    });

    it("should get created album", function(done) {
        request.get(`${API_URL}/${create.id}`, function(error, response, body) {
            const album = JSON.parse(body).data;
            expect(response.statusCode).toBe(200);
            expect(album.rating).toBe(95.0);
            expect(album.year).toBe(1983);
            done();
        });
    });

    it("should return 404 status code getting with wrong id", function(done) {
        request.get(`${API_URL}/-1`, function(error, response, body) {
            expect(response.statusCode).toBe(404);
            done();
        });
    });

    it("should delete an album", function(done) {
        request.delete(`${API_URL}/${create.id}`, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("should return 404 status code deleting with wrong id", function(done) {
        request.delete(`${API_URL}/-1`, function(error, response, body) {
            expect(response.statusCode).toBe(404);
            done();
        });
    });
});

function changeAlbum(){
    albumToCreate.rating = 95.0;
    albumToCreate.year = 1983;
}
