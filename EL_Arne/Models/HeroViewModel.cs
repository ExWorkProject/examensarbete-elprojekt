namespace EL_Arne.Models;

public sealed class HeroViewModel
{
    public required string Eyebrow { get; init; }

    public required string Title { get; init; }

    public required string Description { get; init; }

    public required string PrimaryActionText { get; init; }

    public required string PrimaryActionController { get; init; }

    public required string PrimaryActionName { get; init; }

    public string? SecondaryActionText { get; init; }

    public string? SecondaryActionController { get; init; }

    public string? SecondaryActionName { get; init; }
}
