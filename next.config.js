const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const withTM = require('next-transpile-modules')
const withFonts = require('next-fonts')
const compose = require('next-compose')

const tmConfig = {transpileModules: ['gsap']}

const nextConfig= {exportTrailingSlash: true}

module.exports = compose([
    [withCss],
    [withSass],
    [withTM, tmConfig],
    [withFonts],
    nextConfig
])
