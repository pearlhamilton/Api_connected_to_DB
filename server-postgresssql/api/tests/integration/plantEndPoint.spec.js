describe('plants endpoints', () => {
    let api;
    beforeEach(async () => {
        await resetTestDB()
    })

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(async () => {
        console.log('Gracefully stopping test server')
        await api.close()
    })

    it('should return a list of all plants in database', async () => {
        const res = await request(api).get('/plants')
        expect(res.body).toHaveLength(3)
    });

    it('should retrive a plant based on id', async () => {
        const res = await request(api).get('/plants/1')
        expect(res.body).toStrictEqual(({"id": 1, "name": "Plant1", "light": "Not fussy", "weeks_kept_alive": 0})
        )


    });


    it('should create a new plant ', async () => {
        const res = await request(api)
        .post('/plants')
        .send({"name": "Plant4", "light": "Lots of sun please", "weeks_kept_alive": 9})
        expect(res.body).toStrictEqual({"id": 4, "name": "Plant4", "light": "Lots of sun please", "weeks_kept_alive": 9})



    });

   
})