import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Launch Codes Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'launchcodes');
});

export const { run } = test;
