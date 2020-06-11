import hello from './hello'
import {expect} from 'chai'

function ensureDocumentBodyIsEmpty(): void {
  expect(document.body.innerHTML).to.equal('');
}

function ensureWindowIsClean(): void {
  expect((window as any).hello).to.equal(undefined);
}

describe('hello', () => {

  it('add hello div to document', () => {
    ensureDocumentBodyIsEmpty();
    ensureWindowIsClean();

    hello('typescript');

    expect(document.getElementById('hello')?.innerHTML).to.equal('Hello, typescript');
    expect((window as any).hello).to.equal('typescript');
  })

  it('add hello div to document', () => {
    ensureDocumentBodyIsEmpty();
    ensureWindowIsClean();

    hello('typescript');

    expect(document.getElementById('hello')?.innerHTML).to.equal('Hello, typescript');
    expect((window as any).hello).to.equal('typescript');
  })

})

