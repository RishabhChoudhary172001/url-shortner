# Url-Shortner

Url-Shortner is an efficient and user-friendly URL shortening service. Built with Express.js and MongoDB, it allows users to generate shortened URLs for long web addresses, redirect users via short URLs, and track the visit history of each URL.

## Aim

The primary aim of this project is to provide a simple and reliable service to shorten URLs. Additionally, it offers visit analytics, allowing users to track how often their shortened URLs are accessed.

## Description

In this project, we develop a URL shortening service where users can:
1. **Create a shortened URL** by providing a long URL.
2. **Redirect to the original URL** when a short URL is visited.
3. **Track visit history** for each shortened URL.

## Features

- **URL Shortening**: Convert long URLs into short, manageable links.
- **Redirection**: Seamlessly redirect users from short URLs to their original long URLs.
- **Analytics**: Track and display visit history for each short URL.

## API Documentation

### 1. Create a Short URL

- **Endpoint**: `POST /url`
- **Description**: This endpoint accepts a long URL and generates a shortened URL (shortId).
- **Request Body**:
    ```json
    {
        "url": "https://leetcode.com"
    }
    ```
- **Response**:
    ```json
    {
        "shortId": "abcdef"
    }
    ```
- **Details**: The provided long URL is stored in the database along with a generated `shortId`. The `shortId` is a unique identifier that can be used to access the original URL.

### 2. Redirect to Original URL

- **Endpoint**: `GET /visit/:shortId`
- **Description**: This endpoint uses the `shortId` to find the corresponding long URL and redirects the user to it.
- **Parameters**:
    - `shortId` (string): The short ID of the URL.
- **Response**:
    - **Redirection**: The user is redirected to the original long URL.
- **Details**: When a request is made to this endpoint, the server searches for the long URL associated with the `shortId`. If found, it updates the visit history and redirects the user to the original URL.

### 3. Get URL Visit History

- **Endpoint**: `GET /url/analytics/:shortId`
- **Description**: This endpoint retrieves the visit history for a given `shortId`.
- **Parameters**:
    - `shortId` (string): The short ID of the URL.
- **Response**:
    ```json
    {
        "visitHistory": [
            {
                "timestamp": "2023-01-01T12:00:00Z"
            },
            {
                "timestamp": "2023-01-02T14:00:00Z"
            }
        ]
    }
    ```
- **Details**: The response includes an array of timestamps, each representing a visit to the shortened URL. This allows users to track when their short URL has been accessed.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/RishabhChoudhary172001/url-shortner.git
    cd url-shortner
    ```

2. **Install the dependencies**:
    ```sh
    npm install
    ```

### Running the Application

Start the application with the following command:
```sh
npm start

