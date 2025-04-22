FROM mcr.microsoft.com/devcontainers/base:bullseye

# Install Chromium
RUN apt-get update && apt-get install -y \
    chromium \
    fonts-noto-cjk \
    && rm -rf /var/lib/apt/lists/*
