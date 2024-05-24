// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // this calculates volume of a pyramid

  const params = new URLSearchParams(document.location.search)

  // input
  const radiusOfASphere = params.get('radiusOfASphere')

  // process
  const volume = 4/3 * Math.PI * radiusOfASphere
  const dimensions = "<ul>\n<li>radius of a sphere = " + radiusOfASphere

  // output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('volume').innerHTML = 'volume is: ' + volume.toFixed(2)
}