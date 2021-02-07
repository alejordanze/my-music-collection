var request = require("request");

const API_URL = "http://localhost:3000/api";

const albumToCreate = {
    "releaseDate": "1974-10-10",
    "rating": 85.0,
    "title": "Bohemian Rhapsody",
    "year": 1973
}

const artistToCreate = {
    firstName: "Karol",
    lastName: "G",
    birthDate: "1992-04-24"
}

const created = {
    artistId: 0,
    albumId: 0
};

describe("Album Artist API Exists", function() {

    it("should create an album", function(done) {
        request({method: "POST", 
                uri: `${API_URL}/albums`,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(albumToCreate)}, function(error, response, body) {
                created.albumId = JSON.parse(body).data.id;
            expect(response.statusCode).toBe(201);
            done();
        });
    });

    it("should create an artist", function(done) {
        request({method: "POST", 
                uri: `${API_URL}/artists`,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(artistToCreate)}, function(error, response, body) {
                created.artistId = JSON.parse(body).data.id;
            expect(response.statusCode).toBe(201);
            done();
        });
    });

    it("should return 200 status code adding artist to album", function(done) {
        request.post(`${API_URL}/albumArtist?artistId=${created.artistId}&albumId=${created.albumId}`, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("should return 200 status code removing artist to album", function(done) {
        request.delete(`${API_URL}/albumArtist?artistId=${created.artistId}&albumId=${created.albumId}`, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });


    it("should delete an album", function(done) {
        request.delete(`${API_URL}/albums/${created.albumId}`, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });


    it("should delete an artist", function(done) {
        request.delete(`${API_URL}/artists/${created.artistId}`, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});