import app from "../index";
import supertest from 'supertest';

describe('Testing the resize API endpoint', () => {
    it('should be listening', () => {
        supertest(app).get('/resize').expect(200);
    });
});