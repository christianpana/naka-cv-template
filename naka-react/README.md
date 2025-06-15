
# Naka React

<p style="text-align: center">
  <img src="../naka.png" alt="Naka CV Template Logo" width="150" height="150">
</p>

Naka React is the modern React-based implementation of the Naka CV Template, 
bringing the same clean and professional design to the web. 
Built with TypeScript, React 18, and Vite for optimal performance and developer experience.

## Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm package manager

### Installation

1. Clone the repository or download the project
2. Navigate to the naka-react directory
3. Install dependencies:

```bash
npm install
```

### Development

To run the application locally in development mode:

```bash
npm run dev
```

This will start the development server using Vite. Your application will be available at `http://localhost:5173` (or another port if 5173 is busy).

## Customization

### Data Configuration

The easiest way to customize your CV is by updating the data file:

1. **Edit your CV data**: Modify `./src/data/data.json` with your personal information
2. **Data structure**: The JSON file contains sections for:
  - Personal header information (name, contact details, QR code)
  - About me section
  - Professional experience
  - Education
  - Training and certifications
  - Languages
  - Other achievements

### Data Validation

Naka React uses **Zod** for robust data validation to ensure your CV data is properly formatted:

- All data is validated against predefined schemas
- Email addresses are validated for correct format
- URLs are checked for proper structure
- Required fields are enforced
- Optional fields are clearly defined

If your data doesn't match the expected format, you'll receive clear error messages during development.

### Advanced Customization

For more advanced customization beyond data changes:

1. **Styling**: Modify the Tailwind CSS classes in the React components
2. **Layout**: Update the React components in the `src/components` directory
3. **Fonts**: The project uses PT Serif and PT Sans fonts from Fontsource
4. **Icons**: Lucide React icons are available for UI elements
5. **QR Codes**: QR code generation is handled by react-qrcode-logo

## Building for Production

### Build Process

To create a production build:

```bash
npm run build
```

This command:
- Compiles TypeScript to JavaScript
- Bundles all assets using Vite
- Optimizes the build for production
- Outputs files to the `./dist` directory

### Local Testing

To test your production build locally:

1. Navigate to the dist directory: `cd ./dist`
2. Serve the files locally using a static server:

```bash
npx serve -s ./ -l 3000
```

3. Open `http://localhost:3000` in your browser

## Deployment

### Hosting Options

Since Naka React is a static site (no server-side rendering required), you can deploy it to any static hosting service:

**Recommended platforms:**
- **GitHub Pages**: Enable Pages in your repository settings
- **AWS S3 + CloudFront**: For AWS-based hosting
- **Vercel**: Import your project or upload the build files

## License

Naka React follows the same license terms as the original Naka CV Template. 
Please refer to the [LICENSE](../LICENSE) file for complete details. 
This template is available for individual, non-commercial use only.

## Additional Resources

- **Main Documentation**: See the main [README](../README.md) for complete project documentation
- **Examples**: Check the `examples` directory for sample implementations
- **Issues**: Report bugs or request features through the project's issue tracker
