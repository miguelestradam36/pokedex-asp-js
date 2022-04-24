# About Architecture

## Documentation

### About ASP MVC

Some basic overview of the architecture seen on this project.

#### Models

One model was programmed so far for this project:
    - EmailModel (Data form)
    - Default errror handling model

#### Controllers

Two controllers were programmed so far for this project:
    - EmailController
    - HomeController

#### Views

##### Possibility of hiding code



##### `Razor` usage

On the other side, for being able to apply the benefits of **Razor**, the views have been programmed in cshtml with the use of **layouts**

One very useful example could be being able to render properties or html code for example, this can be based either on triggers or simple conditionals, etc.

```c#
@{
    ViewData["Title"] = "Pokemon Application";
}
@section MetaData {
        <meta name="description" content="Pokedex application written on Javascript, CSS and HTML on the fron-end and ASP.NET on the back-end. Developed by Miguel Estrada.">
        <meta name="keywords" content="HTML, CSS, JavaScript, ASP.NET, Pokedex, Javascript Pokedex, Miguel Estrada Projects, Miguel Estrada">
        <meta name="author" content="Miguel Estrada">
        <meta property="og:title" content="ASP & Javascript Pokedex Application">
        <meta property="og:type" content="website" />
        <meta property="og:image" content="img/logo.png">
        <meta property="og:url" content="http://euro-travel-example.com/index.htm">
        <meta name="twitter:card" content="summary_large_image">
        <meta property="og:description" content="Pokedex application written on Javascript, CSS and HTML on the fron-end and ASP.NET on the back-end. Developed by Miguel Estrada.">
        <meta property="og:site_name" content="Practice - Pokemon Application">
        <meta name="twitter:image:alt" content="Pokeball as logo">
}
```
