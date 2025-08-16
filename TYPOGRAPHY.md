# Typography System

This project implements a comprehensive typography system with consistent sizing, spacing, and styling across all components.

## Typography Specifications

### Headings
- **H1**: `4rem` font-size, `5rem` line-height
- **H2**: `3rem` font-size, `5rem` line-height  
- **H3**: `1.25rem` font-size, `2rem` line-height

### Body Text
- **Paragraph**: `1.125rem` font-size, `1.75rem` line-height, `#9E9E9E` color

## Implementation Method

### Using Tailwind Classes (Recommended)
```tsx
<h1 className="text-h1 font-semibold tracking-tight">
  Your Heading
</h1>

<p className="text-body text-text-secondary">
  Your paragraph text
</p>
```

### Using CSS Classes (Global)
The typography styles are also available globally through CSS, so you can use semantic HTML:

```tsx
<h1>Your Heading</h1>  {/* Automatically gets h1 styles */}
<h2>Your Subheading</h2>  {/* Automatically gets h2 styles */}
<p>Your paragraph</p>  {/* Automatically gets paragraph styles */}
```

## Available Tailwind Classes

- `text-h1` - H1 typography (4rem/5rem)
- `text-h2` - H2 typography (3rem/5rem)  
- `text-h3` - H3 typography (1.25rem/2rem)
- `text-body` - Body typography (1.125rem/1.75rem)
- `text-text-secondary` - Secondary text color (#9E9E9E)

## Best Practices

1. **Consistency**: Always use the defined typography classes for consistent sizing
2. **Semantic HTML**: Use proper heading hierarchy (h1 → h2 → h3)
3. **Accessibility**: Ensure proper contrast ratios and readable font sizes
4. **Responsiveness**: The typography system is designed to work across different screen sizes
5. **Spacing**: Use appropriate padding/margin classes for proper visual hierarchy

## Font Family

The project uses Poppins as the primary font family with fallbacks:
- Primary: Poppins (Regular & SemiBold)
- Fallbacks: ui-sans-serif, system-ui, sans-serif

## Font Rendering

The typography system includes optimized font rendering:
- `-webkit-font-smoothing: antialiased`
- `-moz-osx-font-smoothing: grayscale`  
- `text-rendering: optimizeLegibility`
- `letter-spacing: -0.02em` for headings
