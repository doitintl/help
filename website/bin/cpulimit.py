#!/usr/bin/env python3

"""CPU Limit

Reduce the CPU time of a process by pausing and resuming it repeatedly.

Usage:

    cpulimit.py [COMMAND]
"""

import errno
import os
import signal
import sys
import time


# Adapted from a StackOverflow
# Giampaolo Rodolà
# MIT License
# https://stackoverflow.com/a/6940314
def pid_exists(pid):
    """Check whether the process with PID is still running"""
    try:
        os.kill(pid, 0)
    except OSError as err:
        if err.errno == errno.EPERM:
            return True
    return False


def main(args):
    """Periodically send signals to all PIDs"""
    pid = os.spawnlp(
        os.P_NOWAIT, "/bin/sh", "/bin/sh", "-c", " ".join(args)
    )  # nosec
    while pid_exists(pid):
        sleep_time = wake_time = 0.01
        os.kill(pid, signal.SIGSTOP)
        time.sleep(sleep_time)
        os.kill(pid, signal.SIGCONT)
        time.sleep(wake_time)


if __name__ == "__main__":
    if len(sys.argv) <= 1:
        print(__doc__.strip())
        sys.exit(0)
    main(sys.argv[1:])
