/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Add rule for handling SVG files
    config.module.rules.push({
      test: /\.svg$/, // Match SVG files
      use: [
        {
          loader: '@svgr/webpack', // Use SVGR to handle SVGs as React components
          options: {
            icon: true, // Optional: Enable this if you want to treat SVGs as icons
          },
        },
      ],
    });

    // Add rule for handling PDF files
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]', // This can be adjusted as needed
            outputPath: 'pdfs/', // This specifies the output folder for PDFs
          },
        },
      ],
    });

    return config;
  },
  images: {
    domains: ['res.cloudinary.com', 'img.freepik.com', 'drive.google.com'],
  },
  resolve: {
    // Add '.pdf' if you plan to import PDFs directly
    extensions: ['.js', '.jsx', '.json', '.pdf'],
  },
};

export default nextConfig;
