/*jslint indent: 2, unparam: true*/
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('#chunkDetailsPanel > div:not(.toggl)', {observe: true}, function () {
  var link,
    container = $('#chunkDetailsPanel > div'),
    wrap = createTag('div', 'unibutton admation-ab-wrapper'),
    description = $('#chunkDetailsPanel > div > div').textContent.trim(),
    project = $('#chunkDetailsPanel > div > div + div + div').textContent.trim();


  link = togglbutton.createTimerLink({
    className: 'admation',
    description: description,
    projectName: project
  });
  wrap.appendChild(link);
  container.prepend(wrap);
  // $('#chunkDetailsPanel > div').prepend(link);
});
