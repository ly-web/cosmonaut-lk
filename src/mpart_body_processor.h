#ifndef _mpart_body_processor_h
#define _mpart_body_processor_h

#include "../deps/http_parser/http_parser.h"
#include "../deps/multipart-parser-c/multipart_parser.h"
#include "http_request.h"
#include "params_map.h"

typedef struct mpart_body_processor {
  http_request *request;
  multipart_parser *parser;

  // headers of current part - don't try to use it outside callbacks it's reset on every part
  headers_map *part_headers;
  char *last_header_name;
  param_entry *current_param;
} mpart_body_processor;

mpart_body_processor *mpart_body_processor_init(http_request *request);
void mpart_body_processor_free(mpart_body_processor *p);

#endif