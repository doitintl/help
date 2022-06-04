#!/usr/bin/env python3

import sys


def read():
    """
    Read function.
    """
    print("read")


def write():
    """
    Write function.
    """
    print("write")


def main():
    """
    Main function.
    """
    if len(sys.argv) == 2:
        if sys.argv[1] == "read":
            return read()
        if sys.argv[1] == "write":
            return write()
    print(f"Usage: {sys.argv[0]} [read|write]")
    return False


if __name__ == "__main__":
    if main() is False:
        sys.exit(1)
    sys.exit(0)
