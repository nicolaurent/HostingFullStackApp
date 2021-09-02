import supertest from 'supertest';
import app from '../../../../../server';

const request = supertest(app);

describe('Test Feed endpoint', () => {
    it('Get all feed endpoint', async () => {
        const response = await request.get('/api/v0/feed');
        expect(response.status).toBe(200);
        });
});

