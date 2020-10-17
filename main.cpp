#include <emscripten/bind.h>

#include "xtl/xhash.hpp"

using namespace emscripten;

uint32_t murmur2(const std::string& content, uint32_t seed) {
    return xtl::murmur2_x86(content.data(), content.size(), seed);
}

EMSCRIPTEN_BINDINGS(xtl) {
    function("murmur2", &murmur2);
}
