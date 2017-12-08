#include <stdlib.h>
#include <sys/socket.h>
#include <sys/wait.h>

#include "signal.h"
#include "configuration.h"
#include "log.h"

extern int server_socket_fd;

void sigchld_handler(int signal) {
  while(waitpid(-1, NULL, WNOHANG) > 0);
}

void sigint_handler(int signal) {
  if (setsockopt(server_socket_fd, SOL_SOCKET, SO_REUSEADDR, (int[]){1}, sizeof(int)) == -1) {
    die("port unbind failed");
  }

  configuration_free();
  exit(0);
}

void set_handler(int signal, void *handler) {
  struct sigaction sa;
  sa.sa_handler = handler;
  sigemptyset(&sa.sa_mask);
  sa.sa_flags = SA_RESTART;

  if (sigaction(signal, &sa, NULL) == -1) {
    die("can't set sigaction");
  }
}

void setup_signal_listeners() {
  set_handler(SIGCHLD, sigchld_handler);

  set_handler(SIGINT, sigint_handler);
  set_handler(SIGTERM, sigint_handler);
}
