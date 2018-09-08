import {MicroplasticsReader} from '../MicroplasticsReader';

describe('MicroplasticsReader', () => {
    it('should do stuff', async () => {
        const microplasticsReader = new MicroplasticsReader();
        const result = await microplasticsReader.lookupMicroplasticsForAsin('test');

        expect(result).toBe('Polyethylene');
    });
});