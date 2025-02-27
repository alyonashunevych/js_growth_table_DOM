'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field').firstElementChild;
const rows = table.children;
const MAXCOUNT = 10;
const MINCOUNT = 2;

appendRowButton.addEventListener('click', (e) => {
  const newRow = rows[0].cloneNode(true);

  table.append(newRow);

  if (rows.length > MINCOUNT) {
    removeRowButton.removeAttribute('disabled');
  }

  if (rows.length >= MAXCOUNT) {
    appendRowButton.setAttribute('disabled', 'disabled');
  }
});

removeRowButton.addEventListener('click', (e) => {
  const lastRow = table.lastElementChild;

  lastRow.remove();

  if (rows.length < MAXCOUNT) {
    appendRowButton.removeAttribute('disabled');
  }

  if (rows.length <= MINCOUNT) {
    removeRowButton.setAttribute('disabled', 'disabled');
  }
});

appendColumnButton.addEventListener('click', (e) => {
  [...rows].forEach((row) => {
    const newCell = row.firstElementChild.cloneNode(true);

    row.append(newCell);
  });

  if (rows[0].children.length > MINCOUNT) {
    removeColumnButton.removeAttribute('disabled');
  }

  if (rows[0].children.length >= MAXCOUNT) {
    appendColumnButton.setAttribute('disabled', 'disabled');
  }
});

removeColumnButton.addEventListener('click', (e) => {
  [...rows].forEach((row) => {
    const lastCell = row.lastElementChild;

    lastCell.remove();
  });

  if (rows[0].children.length < MAXCOUNT) {
    appendColumnButton.removeAttribute('disabled');
  }

  if (rows[0].children.length <= MINCOUNT) {
    removeColumnButton.setAttribute('disabled', 'disabled');
  }
});
