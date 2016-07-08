# 2016-07-06

* Load page in headless browser (by default with a pretty wide screen!)

* Web preview: Make a PNG "screenshot" and show PNG screenshot (zoomable)

* PDF/print preview: Print to PDF and show PDF (using pdf.js?)


# 2016-07-05

OK, definitely let's have one figure in one html file. Because

* Figures are independent of crossfig and can still be fully understood even without crossfig to render it. Just open with a web browser.

* The end user is free to implement any complicated logic and design for the creation/instantiation of the figure.

* Crossfig should also be able to render figures that are online.

For figures on disk, maybe we should force the end user to explicitly state which files are needed for the figure, in some config/metadata file on the side. The benefit of this would be that the figure constituents can be automatically versioned/backed up/packaged/distributed etc with crossfig's help. The downside, of course, is that there is more boilerplate/overhead work for each figure. So if this is a feature, better make it optional! So the metadata file could be called a "figure package" or something.



# 2016-07-03

Give Crossfig read/write access to a directory.

Pick HTML files within the directory and put them into iframes?

Or into separate div/figure elements?

<figure id="fig1">
<div class="...">

</div>
</figure>

## iframe

Let's just say that there is an iframe where a selected html file is shown. The default template might just consist of one .css file and one .js file, both included into an .html file with a single <figure> element in the <body>.

* Good because end user can easily include all css etc from some site where the figure will be rendered, without conflicting with crossfig's default css somehow. Might be that someone has only a copy of minified css, javascript etc.

* Good because it makes no assumptions about how the user's figure is initialized/loaded.

* Good because it makes figures stand-alone, more or less independent of the Crossfig application.

## included element

Each figure just defined as some html etc that is inserted into a pre-defined template somewhere.

* Good because it minimizes boilerplate.

* Good because there is a pre-defined and natural way to share css, javascript, assets, etc across all figures.


## In both cases

css, javascript, assets, etc can just be copied out to some website directory when the figure is done, and the whole content of the html file (containing e.g. only a <div> or <figure>) can be copied into some other place.

## File browser idea

There could be a file browser where folders and/or groups with similar names may be selected. E.g. figure1.html, figure1.css, figure1.js, ..., can be simultaneously selected under the name "figure1". What happens then?

In principle there should be full freedom to customize the whole window. So why not give the end user possibility to utilize the whole Electron API? But there should also be sensible defaults.


