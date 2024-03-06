var renderClass;
		
		var renderers = {
			"virtual": RendererVirtualDomHorizontal,
			"basic": RendererBasicHorizontal,
		};
		
		if(typeof this.table.options.renderHorizontal === "string"){
			renderClass = renderers[this.table.options.renderHorizontal];
		}else{
			renderClass = this.table.options.renderHorizontal;
		}
		
		if(renderClass){
			this.renderer = new renderClass(this.table, this.element, this.tableElement);
			this.renderer.initialize();
		}else{
			console.error("Unable to find matching renderer:", this.table.options.renderHorizontal);
		}
	}
//yes
var el = document.createElement("div");
		
		el.classList.add("tabulator-header");
		el.setAttribute("role", "rowgroup");
		
		if(!this.table.options.headerVisible){
			el.classList.add("tabulator-header-hidden");
		}
		
		return el;
	}
