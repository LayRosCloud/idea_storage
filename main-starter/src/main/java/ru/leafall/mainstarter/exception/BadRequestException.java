package ru.leafall.mainstarter.exception;

public class BadRequestException extends RuntimeException {

    public BadRequestException(String message) {
        super(message);
    }

    public BadRequestException() {
        this("Request has bad params");
    }
}
