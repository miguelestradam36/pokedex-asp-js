using System.ComponentModel.DataAnnotations;
namespace ASP_Pokemon.Models
{
    public class PokemonModel
    {
        [Required]
        [StringLength(4, MinimumLength = 1)]
        public int Id { get; set; }
    }
}