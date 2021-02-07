var request = require("request");

const API_URL = "http://localhost:3000/api/artists";

const artistToCreate = {
    firstName: "Karol",
    lastName: "G",
    birthDate: "1992-04-24"
}

const created = {
    id: 0
}

describe("Artist API Exists", function() {

    it("should create an artist", function(done) {
        request({method: "POST", 
                uri: `${API_URL}`,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(artistToCreate)}, function(error, response, body) {
                created.id = JSON.parse(body).data.id;
            expect(response.statusCode).toBe(201);
            done();
        });
    });

    it("returns status code 200 get all artists", function(done) {
        request.get(`${API_URL}`, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("should return list length greater than zero", function(done) {
        request.get(`${API_URL}`, function(error, response, body) {
            const data = JSON.parse(body).data;
            expect(data.length).toBeGreaterThan(0);
            done();
        });
    });
    
    it("should update an artist", function(done) {
        changeArtist();
        request({method: "PUT", 
                uri: `${API_URL}/${created.id}`,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(artistToCreate)}, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("should return 404 status code updating artist with wrong id", function(done) {
        changeArtist();
        request({method: "PUT", 
                uri: `${API_URL}/-1`,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(artistToCreate)}, function(error, response, body) {
            expect(response.statusCode).toBe(404);
            done();
        });
    });

    it("should get the artist created", function(done) {
        request.get(`${API_URL}/${created.id}`, function(error, response, body) {
            const artist = JSON.parse(body).data;
            expect(response.statusCode).toBe(200);
            expect(artist.birthDate.split('T')[0]).toBe(artistToCreate.birthDate);
            done();
        });
    });

    it("should return 404 status code getting artist with wrong id", function(done) {
        request.get(`${API_URL}/-2`, function(error, response, body) {
            expect(response.statusCode).toBe(404);
            done();
        });
    });

    it("should delete an artist", function(done) {
        request.delete(`${API_URL}/${created.id}`, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("should return 404 status code deleting artist with wrong id", function(done) {
        request.delete(`${API_URL}/-3`, function(error, response, body) {
            expect(response.statusCode).toBe(404);
            done();
        });
    });
});


function changeArtist(){
    artistToCreate.birthDate = '1999-09-20';
}