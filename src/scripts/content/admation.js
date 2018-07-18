/*jslint indent: 2, unparam: true*/
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('#chunkDetailsPanel > div:not(.toggl)', {observe: true}, function () {
  var link,
    description = $('#chunkDetailsPanel > div > div').textContent.trim(),
    project = $('#chunkDetailsPanel > div > div + div + div').textContent.trim();


  link = togglbutton.createTimerLink({
    className: 'zube',
    description: description,
    projectName: project
  });

  $('#chunkDetailsPanel').appendChild(link);
});
