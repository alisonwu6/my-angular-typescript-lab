import { IncrementCountPipe } from './increment-count.pipe';

describe('IncrementCountPipe', () => {
  it('create an instance', () => {
    const pipe = new IncrementCountPipe();
    expect(pipe).toBeTruthy();
  });
});
