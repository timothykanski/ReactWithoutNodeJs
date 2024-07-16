using DotNetReact.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DotNetReact.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult SelectCard([FromBody] CardModel card)
        {
            // Process the card (e.g., save it to the database)
            // ...
            
            // Return a response indicating success or failure
            return Ok(new { message = $"Card added successfully: {card.Description}" });
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
