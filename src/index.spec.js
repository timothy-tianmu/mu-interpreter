import IDE from './IDE';

const ide = new IDE()
test('should return Hello World!', () => {
	expect(ide.test()).toBe('ok!');
});