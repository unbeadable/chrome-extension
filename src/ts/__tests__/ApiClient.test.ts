import {ApiClient} from '../ApiClient';

describe('ApiClient', () => {
    it('should do stuff', async () => {
        const apiClient = new ApiClient();

        let result = await apiClient.getDataForASIN('test');

        expect(result).toBe('Polyethylene');
    });
});