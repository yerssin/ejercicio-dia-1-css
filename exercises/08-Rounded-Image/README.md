# `08` Rounded Image

A lot of websites use rounded profile images, a technique that really makes a website more beautiful!

The obvious way create a rounded profile picture is to create an image tag and apply border-radius:100%. The problem with this approach, is that it only works for squared pictures... profile pictures with different height and width will not look like a circle, they will look like ovals:

![Example Image](https://github.com/4GeeksAcademy/css-tutorial-exercises-course/blob/master/.learn/assets/08-1.png?raw=true)

## 📝 Instructions:


In addition to the border-radius you have to use the `object-fit` css property, [here is an explanation](https://www.loom.com/share/15186e456dfd4741887997af40325721).

If the image ends up being bigger than the div (or with different proportions) we can adjust the object-position to choose what part of the image we want to display inside of the circle.

You can also read [this great article about object fit](https://css-tricks.com/on-object-fit-and-object-position/)

