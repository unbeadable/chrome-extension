import {MicroplasticAsinLookup} from '../MicroplasticAsinLookup';

describe('MicroplasticAsinLookup', () => {
    it('should do stuff', async () => {
        const result = await MicroplasticAsinLookup.lookup('B00COKKPJK');

        expect(result).toBe('Polyethylene');
    });
});