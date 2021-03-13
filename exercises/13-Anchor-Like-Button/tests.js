const fs=require("fs");
const path=require("path");
const html=fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
const css=fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");


jest.dontMock("fs");



describe("All the styles should be applied", function () {
  beforeEach(() => {
    //here I import the HTML into the document
    document.documentElement.innerHTML=html.toString();


  });
  afterEach(() => {
    jest.resetModules();
  });

  it("the  padding  should be '10px'", function () {
    document.querySelector(
      "head"

    ).innerHTML=`<style>${css.toString()}</style>`;
    let divTag=document.querySelector(".orange-btn");
    let classTagStyles=window.getComputedStyle(divTag);

    expect(classTagStyles["padding"]).toBe("10px");
  });
  it("the  border radius should be '4px'", function () {
    document.querySelector(
      "head"

    ).innerHTML=`<style>${css.toString()}</style>`;
    let divTag=document.querySelector(".orange-btn");
    let classTagStyles=window.getComputedStyle(divTag);
    expect(classTagStyles["border-radius"]).toBe("4px");
  });
  it("the  border should be '1px solid #ffffff;'", function () {
    document.querySelector(
      "head"

    ).innerHTML=`<style>${css.toString()}</style>`;
    let divTag=document.querySelector(".orange-btn");
    let classTagStyles=window.getComputedStyle(divTag);
    expect(classTagStyles["border"]).toBe("1px solid #ffffff");
  });
  it("the  background should be 'rgb(255, 153, 51)'", function () {
    document.querySelector(
      "head"

    ).innerHTML=`<style>${css.toString()}</style>`;
    let divTag=document.querySelector(".orange-btn");
    let classTagStyles=window.getComputedStyle(divTag);
    expect(classTagStyles["background"]).toBe("rgb(255, 153, 51)");
  });
  it("the  underline should to be removed", function () {
    document.querySelector(
      "head"

    ).innerHTML=`<style>${css.toString()}</style>`;
    let divTag=document.querySelector(".orange-btn");
    let classTagStyles=window.getComputedStyle(divTag);
    expect(classTagStyles["text-decoration"]).toBe("none");
  });
  it("The mouse hover property should be #cc7a00", function () {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let cssArray=document.styleSheets[0].cssRules;

    let orangeHoverSelector="";
    for (let i=0; i<cssArray.length; i++) {
      if (cssArray[i].selectorText===".orange-btn:hover") {
        orangeHoverSelector=cssArray[i].style.background;
      }
    }

    expect(orangeHoverSelector).toBe("#cc7a00");
  });

  it("You should be careful with the specifity", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let cssArray=document.styleSheets[0].cssRules[0].selectorText;
    expect(cssArray).toBe(".orange-btn");
  }
  )
it("You should not change the head tag", function () {

    let meta1 = document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<meta c")
    let meta2 = document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<meta n")
    let link = document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<link")
    let title = document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<title")
    expect(meta1).not.toBe(-1)
    expect(meta2).not.toBe(-1)
    expect(link).not.toBe(-1)
    expect(title).not.toBe(-1)
    expect(html.toString().indexOf(`<style`)>-1).toBeFalsy();





  })

});
