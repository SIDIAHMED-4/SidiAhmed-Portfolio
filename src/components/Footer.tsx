export const Footer = () => {
  return (
    <footer className="py-8 bg-secondary/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm md:text-base text-muted-foreground flex items-center justify-center gap-2">
             Sidi Ahmed Nejaba
          </p>
          <p className="text-xs md:text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
